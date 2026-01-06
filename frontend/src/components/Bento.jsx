import React from 'react'

const Bento = () => {
  return (
<div class="max-w-6xl mx-auto p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

    <div class="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 bg-zinc-900 text-white rounded-2xl p-6">
      <h2 class="text-2xl font-bold">Main Feature</h2>
      <p class="mt-2 text-zinc-400">
        This is the primary bento item.
      </p>
    </div>

    <div class="bg-zinc-800 text-white rounded-2xl p-6">
      <h3 class="font-semibold">Card One</h3>
    </div>

    <div class="row-span-2 bg-zinc-800 text-white rounded-2xl p-6">
      <h3 class="font-semibold">Card Two</h3>
    </div>

    <div class="col-span-1 md:col-span-2 bg-zinc-800 text-white rounded-2xl p-6">
      <h3 class="font-semibold">Card Three</h3>
    </div>

    <div class="bg-zinc-800 text-white rounded-2xl p-6">
      <h3 class="font-semibold">Card Four</h3>
    </div>

  </div>
</div>
  )
}

export default Bento