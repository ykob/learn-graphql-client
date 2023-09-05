import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/schema.graphql",
  generates: {
    "src/graphql/generated.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
