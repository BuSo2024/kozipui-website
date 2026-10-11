# KoziPui website

Static bilingual Turkish / English Version 1 prototype. HTML, CSS and JavaScript only; no build step, backend, payment, accounts or external assets.

## Preview locally

From the repository directory:

```sh
python3 -m http.server 8000
```

Open `http://localhost:8000` in your own browser. Stop the server with Ctrl+C. Opening `index.html` directly also works, but using a local server is recommended.

## Files

- `index.html`: single-page structure and accessible forms/dialogs.
- `styles.css`: responsive blue-white styling and native hero animation, respecting reduced-motion preferences.
- `script.js`: TR/EN translations, personalization preview, in-memory quote basket and WhatsApp message generation.
- `assets/images/*.svg`: original illustrative product placeholders, not real product photographs.
- `docs/PROJECT-BRIEF.md`: planning reference, retained unchanged during implementation.

## Before public launch

1. Set `WHATSAPP_NUMBER` in `script.js` to an international number containing digits only (no plus sign or spaces). The placeholder `905XXXXXXXXX` intentionally prevents sending.
2. Set `INSTAGRAM_URL` to the studio's full Instagram HTTPS URL. Add the confirmed email address in place of the bilingual email placeholder.
3. Replace the provisional brand mark and product illustrations with the approved toucan logo and real studio/product assets. Update relevant alternative text.
4. Replace the clearly labeled sample reviews with approved real reviews, or remove the section.
5. Review both languages and final business copy.

The basket contains quote requests, not purchases; its contents reset on page reload. There is no checkout or payment. File selection stays on the user's device. Submitting the design form prepares a local request only; nothing is uploaded or sent. WhatsApp links carry text, not attachments: users must manually attach their file in the conversation. The preview is illustrative, not an embroidery production proof.

## Publish on GitHub Pages

Commit and push the website files to the desired branch. In GitHub, open **Settings → Pages**, choose **Deploy from a branch**, select that branch and **/(root)**, then save. GitHub will provide the site address once deployment finishes. All local asset paths are relative and work under a repository Pages path. No workflow or build tool is needed. A custom domain can be configured later in Pages settings.

Publication has not been performed by this implementation.
