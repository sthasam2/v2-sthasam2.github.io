#######################################
#              BASE                   # 
#######################################

FROM node:21.0.0-alpine3.18  as base



#######################################
#              DEPS                   # 
#######################################

FROM base as deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN corepack enable
RUN --mount=type=cache,id=pnpm,mode=0777,target=/root/.cache/pnpm/store \
  pnpm install --frozen-lockfile



#######################################
#           DEVELOPMENT               #
#######################################

FROM base as development
WORKDIR /home/development/app

RUN apk add vim lf bat fzf curl

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
EXPOSE 6006

ENV PORT 3000

RUN chmod +x ./scripts/entrypoint.dev.sh

CMD ["sh", "./scripts/entrypoint.dev.sh"]



#######################################
#         PRODUCTION BUILDER          #
#######################################

FROM deps as builder
WORKDIR /app

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1

RUN pnpm build



#######################################
#           PRODUCTION                #
#######################################

FROM base as production
WORKDIR /home/production/app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN mkdir .next
RUN chown -R nextjs:nodejs .next

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

RUN chmod +x ./scripts/entrypoint.prod.sh

CMD ["sh", "./scripts/entrypoint.prod.sh"]
