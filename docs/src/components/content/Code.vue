<template>
  <div
    class="bg-neutral-900 border-neutral-100 dark:border-neutral-900 border rounded overflow-hidden not-prose ">
    <div class="relative min-h-[220px]">
      <slot />
    </div>
  </div>
</template>
<!-- <script>
  // let blocks = document.querySelectorAll('pre');

  blocks.forEach((block) => {
    // only add button if browser supports Clipboard API
    if (navigator.clipboard) {
      let button = document.createElement('button');
      let icon = document.createElement('img');
      button.classList.add('copy-code-button');
      block.appendChild(button);
      button.appendChild(icon);
      icon.src = '/copy.svg';
      icon.classList.add('icon');
      icon.classList.add('!m-0');

      button.addEventListener('click', async () => {
        await copyCode(block, button);
      });
    }
  });

  async function copyCode(block: HTMLPreElement, button: HTMLButtonElement) {
    let code = block.querySelector('code');
    let text = code?.innerText;

    await navigator.clipboard.writeText(text ?? '');
  }
</script> -->
