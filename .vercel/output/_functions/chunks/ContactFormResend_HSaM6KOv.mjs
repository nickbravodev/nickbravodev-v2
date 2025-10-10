import { c as createComponent, a as createAstro, d as renderTemplate, b as addAttribute, m as maybeRenderHead } from './astro/server_D5xLaq5v.mjs';
import 'kleur/colors';
import 'clsx';
import { a as actions } from './_astro_actions_CLdTVrdY.mjs';
/* empty css                          */
import { i as isInputError } from './astro-designed-error-pages_Cq50zKVY.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$ContactFormResend = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactFormResend;
  const result = Astro2.getActionResult(actions.send);
  if (result?.data) {
    return Astro2.redirect("/success");
  }
  console.log(result?.data);
  const inputErrors = isInputError(result?.error) ? result.error.fields : {};
  return renderTemplate(_a || (_a = __template(["<!-- Contact section -->", `<section id="contact" data-astro-cid-hgas65sd> <div class="contact-wrapper" data-astro-cid-hgas65sd> <div data-astro-cid-hgas65sd> <!-- Contact text --> <h2 data-astro-cid-hgas65sd>Get in touch.</h2> <div class="hr-div" data-astro-cid-hgas65sd></div> <p class="subheading" data-astro-cid-hgas65sd>
I'm ready to join your team! Send me a message if you think we'd be a great fit!
</p> </div> <!-- Contact form --> <div data-astro-cid-hgas65sd> <form`, ' method="post" data-astro-cid-hgas65sd> <div class="flex gap-2" data-astro-cid-hgas65sd> <div data-astro-cid-hgas65sd> <label class="form-label sr-only" for="firstName" data-astro-cid-hgas65sd>First Name</label> <input class="form-control" type="text" id="firstName" name="firstName" placeholder="First Name" required', " data-astro-cid-hgas65sd> </div> ", ' <div data-astro-cid-hgas65sd> <label class="form-label sr-only" for="lastName" data-astro-cid-hgas65sd>Last Name</label> <input class="form-control" type="text" id="lastName" name="lastName" placeholder="Last Name" required', " data-astro-cid-hgas65sd> </div> </div> ", ' <div data-astro-cid-hgas65sd> <label class="form-label sr-only" for="email" data-astro-cid-hgas65sd>Email</label> <input class="form-control" type="email" id="email" name="email" placeholder="Email" required', " data-astro-cid-hgas65sd> </div> ", ' <div data-astro-cid-hgas65sd> <label class="form-label sr-only" for="description" data-astro-cid-hgas65sd>Message</label> <textarea class="form-control" rows="3" id="description" name="message" placeholder="Type your message here" required', " data-astro-cid-hgas65sd></textarea> </div> ", ' <div class="cf-turnstile"', ' data-size="" data-appearance="always" data-astro-cid-hgas65sd></div> <!-- <TurnstileWidget size="flexible" /> --> <div data-astro-cid-hgas65sd><button class="outline" data-astro-cid-hgas65sd>Send message</button></div> </form> </div> </div> </section> <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" defer></script> <script>\n  "use strict";\n\n  // Form validation\n  // (function () {\n  //   const forms = document.querySelectorAll(".needs-validation");\n  //   Array.from(forms).forEach(function (form) {\n  //     form.addEventListener(\n  //       "submit",\n  //       function (event) {\n  //         if (!form.checkValidity()) {\n  //           event.preventDefault();\n  //           event.stopPropagation();\n  //         } else if (form.checkValidity() == true) {\n  //           event.preventDefault();\n  //           form.submit();\n  //         }\n  //         form.classList.add("was-validated");\n  //       },\n  //       false\n  //     );\n  //   });\n  // })();\n\n  const success = () => {\n    if (window.location.href.indexOf("?_action=send") != -1) {\n      window.location.href = "/success";\n    }\n  }\n\n  success();\n</script> '])), maybeRenderHead(), addAttribute(actions.send, "action"), addAttribute(inputErrors.firstName ? "firstName-error" : void 0, "aria-describedby"), inputErrors.firstName && renderTemplate`<p id="name-error" data-astro-cid-hgas65sd>${inputErrors.firstName[0]}</p>`, addAttribute(inputErrors.lastName ? "lastName-error" : void 0, "aria-describedby"), inputErrors.lastName && renderTemplate`<p id="name-error" data-astro-cid-hgas65sd>${inputErrors.lastName[0]}</p>`, addAttribute(inputErrors.email ? "email-error" : void 0, "aria-describedby"), inputErrors.email && renderTemplate`<p id="email-error" data-astro-cid-hgas65sd>${inputErrors.email[0]}</p>`, addAttribute(inputErrors.message ? "message-error" : void 0, "aria-describedby"), inputErrors.message && renderTemplate`<p id="message-error" data-astro-cid-hgas65sd>${inputErrors.message[0]}</p>`, addAttribute("0x4AAAAAAA_5SWCq1QogACSS", "data-sitekey"));
}, "/Users/nickbates/Sync/development/nickbravodev-v2/src/components/forms/ContactFormResend.astro", void 0);
const $$file = "/Users/nickbates/Sync/development/nickbravodev-v2/src/components/forms/ContactFormResend.astro";
const $$url = void 0;

export { $$ContactFormResend as default, $$file as file, $$url as url };
