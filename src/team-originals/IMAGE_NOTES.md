# Team portrait cutouts

Built-in imagegen edit mode was used separately on each supplied photograph, with transparent_background=true. The selected PNG outputs are retained here; the website serves optimized WebP versions in public/assets/team (about 117–191 KB each), preserving alpha. Originals supplied by the user were not overwritten.

Portrait order: Uzair Akram; M Umar Hassan; Asghar Abbas.

Prompt for each photo:

“Use case: background-extraction. Edit target: the attached portrait. Remove the entire background, borders, phone UI, black letterboxing and screenshot artifacts if any. Return only this same person as a clean photographic cutout with actual transparent alpha. Preserve facial identity exactly, natural skin texture, original expression, hairstyle, clothing, pose and visible torso. Do not beautify, redraw, restyle or change age. Keep the entire visible person without cutting hair or shoulders; tight portrait framing. No text, no scenery, no shadow backdrop. This is portrait [1 / 2 / 3] for a team website.”

All three PNGs were inspected visually and alpha ranges verified as 0–255. Website portrait frames are composed in CSS.
