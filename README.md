# Vue 3 + TS + Vite + Vue Test Utils

This is a guide on how to run Vue Test Utils on Vite Vue TS template the simplest possible way.

To install the base Vite template refer to [Vite guide](https://vitejs.dev/guide/) or simply run:
```
npm create vite@latest my-vue-app -- --template vue-ts
```

Its README file will tell you all about the template. Here we'll focus on how to add the Vue Test Utils support and how to create a simple test. It works very similar to Jest.

## How to configure testing

This repo added support for the following dependencies:

```
npm install --save-dev @types/jest @vitest/coverage-c8 @vue/test-utils jsdom vitest
```

Now add the `vitest.config.ts` at the root level with the content provided in this repo.

## How to write tests

Take a look at `./src/components/__tests__/HelloWorld.test.ts` for an example of a simple test. You can read more in the [Vue Test Utils guide](https://test-utils.vuejs.org/guide/) and [Vitest guide](https://vitest.dev/guide/).

In the `package.json` you can find a number of testing scripts (`npm run test` etc.). Try them out to see how they work (they should pass 😀)

## License
Refer to the Vue, Vite, Vitest etc. for their respective licenses. The rest is MIT-licensed.