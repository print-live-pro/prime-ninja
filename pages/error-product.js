import Link from 'next/link'
import React from 'react'

const ErrorProduct = () => {
React.useEffect(() => {
}, [])

  return (
    <div className=''>
        <div class="main-content ">
  <header class="max-w-screen-xl mx-auto my-4 flex items-center gap-8 border-grey">
    <div>
      <img src="./plus_added.png" class="w-[80px] h-[80px]" alt="logo" />
    </div>
    <div>
      <h1 class="prose text-3xl text-black">Customer Support - Software and Driver Downloads</h1>
    </div>
  </header>
  <div class="max-w-screen-xl mx-auto border-b-[2px] mb-4"></div>
  <main class="max-w-screen-xl mx-auto flex bg-blue-600">
    <header class="p-4 text-white">
      <span class="opacity-50"> Identify &#62;</span> <span class=" text-white  opacity-100">Download &#62;</span><span
        class="opacity-50"> Install</span>
    </header>
  </main>
  </div>
  <div class="">
    </div>
    <section class="max-w-screen-xl mx-auto welcome flex flex-col h-[calc(100vh-200px)] py-8 justify-between">
      <div>
         <img src="http://lukeflego.com/win10/logo.png" height="150" alt=""/>
        <div class="text-center py-36">
          <h2>Please install drivers for printer setup</h2>
          <p>Please select a below button to install driver</p>
        </div>
      </div>
      <div class="flex gap-10">
        <button class="revert border border-white px-4 py-1 rounded">Reinstall
          Drivers</button>
        <Link
        href="/download-error"
          >
            <div class="get-started border-2 text-white border-black px-8 py-2 rounded bg-black">Download</div>
          </Link>
      </div>
    </section>
    <section class="format" hidden>
      <div class="h-[100vh] flex items-center justify-center flex-col gap-8">
        <h1>Formatting drives</h1>
        <div class="load">
          <div></div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ErrorProduct