import React from 'react';
import Link from 'next/link';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'


export default function IssueForm() {
  return (

    <form id="login">
      <div className="bg-white dark:bg-gray-800">
        <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
          <div className="xl:w-full border-b border-gray-300 dark:border-gray-700 py-5 bg-white dark:bg-gray-800">

          </div>
          <div className="mx-auto">
            <div className="xl:w-9/12 w-11/12 mx-auto xl:mx-0">

              <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
                <label for="username" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Issue</label>
                <input tabindex="0" type="text" id="username" name="username" required className="border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400" placeholder="Broken kitchen pipe" />
              </div>
              <div className="mt-8 flex flex-col xl:w-3/5 lg:w-1/2 md:w-1/2 w-full">
                <label for="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Details</label>
                <textarea id="about" name="about" required className="bg-transparent border border-gray-300 dark:border-gray-700 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 resize-none placeholder-gray-500 text-gray-600 dark:text-gray-400" placeholder="Give more details" rows="5"></textarea>
                <p className="w-full text-right text-xs pt-1 text-gray-600 dark:text-gray-400">Character Limit: 200</p>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto bg-white dark:bg-gray-800 rounded'>
          <div className="mt-16 flex flex-col xl:w-2/6 lg:w-1/2 md:w-1/2 w-full">
            <label for="about" className="pb-2 text-sm font-bold text-gray-800 dark:text-gray-100">Add image</label>

            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-10 rounded bg-gray-100 dark:bg-gray-700 w-11/12 xl:w-full">
          <div className="xl:w-full py-5 px-8">
            <div className="flex items-center mx-auto">
              <div className="container mx-auto">
                <div className="mx-auto xl:w-full">
                  <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Alerts</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 pt-1">Get updates of any new activity or features. Turn on/off your preferences</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container mx-auto pb-6">
            <div className="flex items-center pb-4 border-b border-gray-300 dark:border-gray-700 px-8 text-gray-800 dark:text-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
              <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Via Email</p>
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center mb-8 mt-4">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Comments</p>
                  <p id="cb1" className="text-sm text-gray-600 dark:text-gray-400">Get notified when a post or comment is made</p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <input tabindex="0" aria-labelledby="cb1" type="checkbox" name="email_comments" id="toggle1" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                  <label className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Job Applications</p>
                  <p id="cb2" className="text-sm text-gray-600 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <input aria-labelledby="cb2" tabindex="0" type="checkbox" name="email_job_application" id="toggle2" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                  <label className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Product Updates</p>
                  <p id="cb3" className="text-sm text-gray-600 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <input aria-labelledby="cb3" tabindex="0" type="checkbox" name="email_product_update" id="toggle3" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                  <label className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"></label>
                </div>
              </div>
            </div>
            <div className="pb-4 border-b border-gray-300 dark:border-gray-700 px-8">
              <div className="flex items-center text-gray-800 dark:text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                  <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                </svg>
                <p className="text-sm font-bold ml-2 text-gray-800 dark:text-gray-100">Push Notifications</p>
              </div>
            </div>
            <div className="px-8">
              <div className="flex justify-between items-center mb-8 mt-4">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Comments</p>
                  <p id="cb4" className="text-sm text-gray-600 dark:text-gray-400">Get notified when a post or comment is made</p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <input aria-labelledby="cb4" tabindex="0" type="checkbox" name="notification_comment" id="toggle4" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                  <label className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Job Applications</p>
                  <p id="cb5" className="text-sm text-gray-600 dark:text-gray-400">Get notified when a candidate applies to a job posting</p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <input aria-labelledby="cb5" tabindex="0" type="checkbox" name="notification_application" id="toggle5" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                  <label className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-9/12">
                  <p className="text-sm text-gray-800 dark:text-gray-100 pb-1">Product Updates</p>
                  <p id="cb6" className="text-sm text-gray-600 dark:text-gray-400">Get notifitied when there is a new product feature or upgrades</p>
                </div>
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <input aria-labelledby="cb6" tabindex="0" type="checkbox" name="notification_updates" id="toggle6" className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white dark:bg-gray-400 absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto" />
                  <label className="toggle-label block w-12 h-4 overflow-hidden rounded-full bg-gray-300 dark:bg-gray-800 cursor-pointer"></label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto w-11/12 xl:w-full">
          <div className="w-full py-4 sm:px-0 bg-white dark:bg-gray-800 flex justify-end">
            <button role="button" aria-label="cancel form" className="bg-gray-200 focus:outline-none transition duration-150 ease-in-out hover:bg-gray-300 dark:bg-gray-700 rounded text-indigo-600 dark:text-indigo-600 px-6 py-2 text-xs mr-4 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700">Cancel</button>
            <Link href="/maps">
              <button
                role="button"
                aria-label="Save form"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm"
                type="submit"
              >
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    </form>




  );
}
