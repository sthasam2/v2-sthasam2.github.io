#!/bin/sh

echo "Running entrypoint.dev.sh"

echo "starting storybook"
(yarn run storybook &)

echo "starting dev server"
yarn run dev
