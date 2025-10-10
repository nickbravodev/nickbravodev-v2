import 'es-module-lexer';
import './chunks/astro-designed-error-pages_Cq50zKVY.mjs';
import 'kleur/colors';
import './chunks/astro/server_D5xLaq5v.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_DrXFWJvU.mjs';

const COMPONENT_IDENTIFIER = "data-turnstile-container";
const TURNSTILE_SCRIPT = `
  <script 
    src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" 
    async 
    defer 
    id="turnstile-script">
  <\/script>`;
const MAX_SCAN_BYTES = 16384;
let bytesScanned = 0;
const onRequest$1 = async (_, next) => {
  const response = await next();
  const contentType = response.headers.get("Content-Type");
  if (!contentType?.includes("text/html") || !response.body) {
    return response;
  }
  const transformedBody = response.body.pipeThrough(new TextDecoderStream()).pipeThrough(createFastScriptInjectionTransform()).pipeThrough(new TextEncoderStream());
  return new Response(transformedBody, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
};
function createFastScriptInjectionTransform() {
  let hasInjected = false;
  let hasFoundComponent = false;
  let buffer = "";
  return new TransformStream({
    transform(chunk, controller) {
      if (hasInjected || bytesScanned > MAX_SCAN_BYTES) {
        controller.enqueue(chunk);
        return;
      }
      bytesScanned += chunk.length;
      if (!hasFoundComponent) {
        if (chunk.includes(COMPONENT_IDENTIFIER)) {
          hasFoundComponent = true;
          buffer = chunk;
        } else {
          controller.enqueue(chunk);
          return;
        }
      } else {
        buffer += chunk;
      }
      const headCloseIndex = buffer.indexOf("</head>");
      if (headCloseIndex === -1) {
        if (buffer.length > MAX_SCAN_BYTES) {
          controller.enqueue(buffer);
          buffer = "";
          hasInjected = true;
        }
        return;
      }
      const injectedContent = buffer.slice(0, headCloseIndex) + TURNSTILE_SCRIPT + buffer.slice(headCloseIndex);
      controller.enqueue(injectedContent);
      hasInjected = true;
      buffer = "";
    },
    flush(controller) {
      if (buffer) {
        controller.enqueue(buffer);
      }
      bytesScanned = 0;
    }
  });
}

const onRequest = sequence(
	
	
	onRequest$1
);

export { onRequest };
