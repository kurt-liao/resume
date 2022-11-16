export default ({ description = [], repo, appLink }: { description: string[]; repo?: string; appLink?: string }) => {
  return `${description.map(d => `<p class="text-left">${d}</p>`).join('')}
  <div class="flex justify-center gap-2">
  ${repo && `<a href="${repo}" class="draw-outline draw-outline--tandem" target="_blank">Github Repo</a>`}${appLink && `<a href="${appLink}" class="draw-outline draw-outline--tandem" target="_blank">Go >>></a>`}
  </div>`
}
