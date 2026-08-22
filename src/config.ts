import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "Message Drop",
  description: "A lightweight peer-to-peer message stream for a shared room.",
  accentHex: "#9668ca",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
