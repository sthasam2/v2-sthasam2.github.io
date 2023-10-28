#!/bin/sh

echo "Running entrypoint.local.sh"

echo "starting storybook"
(pnpm run storybook &)

echo "starting dev server"
pnpm run dev
