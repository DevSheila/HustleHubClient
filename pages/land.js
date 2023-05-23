function Landing1() {
    return (
        <section>
        <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

            <div className="bg-gray-800 pt-3">
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 className="font-bold pl-2">Dashboard</h1>
                </div>
            </div>

            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Metric Card*/}
                    <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-600">Total Revenue</h2>
                               <p className="font-bold text-3xl">$3249 <span className="text-green-500"><i className="fas fa-caret-up"></i></span></p>
                            </div>
                        </div>
                    </div>
                    {/*/Metric Card*/}
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Metric Card*/}
                    <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-600">Total Clients</h2>
                                <p className="font-bold text-3xl">249 <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></p>
                            </div>
                        </div>
                    </div>
                    {/*/Metric Card*/}
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Metric Card*/}
                    <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-600">New Clients</h2>
                                <p className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span></p>
                            </div>
                        </div>
                    </div>
                    {/*/Metric Card*/}
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Metric Card*/}
                    <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-blue-600"><i className="fas fa-server fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-600">Duration</h2>
                                <p className="font-bold text-3xl">152 days</p>
                            </div>
                        </div>
                    </div>
                    {/*/Metric Card*/}
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Metric Card*/}
                    <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-indigo-600"><i className="fas fa-tasks fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-600">To Do List</h2>
                                <p className="font-bold text-3xl">7 tasks</p>
                            </div>
                        </div>
                    </div>
                    {/*/Metric Card*/}
                </div>
                <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                    {/*Metric Card*/}
                    <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                        <div className="flex flex-row items-center">
                            <div className="flex-shrink pr-4">
                                <div className="rounded-full p-5 bg-red-600"><i className="fas fa-inbox fa-2x fa-inverse"></i></div>
                            </div>
                            <div className="flex-1 text-right md:text-center">
                                <h2 className="font-bold uppercase text-gray-600">Issues</h2>
                                <p className="font-bold text-3xl">3 <span className="text-red-500"><i className="fas fa-caret-up"></i></span></p>
                            </div>
                        </div>
                    </div>
                    {/*/Metric Card*/}
                </div>
            </div>


            <div>

            

            <div class="flex flex-col">
        <div class="overflow-x-auto">
        <h1 class="text-xl sm:text-2xl font-semibold text-gray-900">New Clients</h1>

          <div class="align-middle inline-block min-w-full">
            <div class="shadow overflow-hidden">
              <table class="table-fixed min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-100">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox"
                          class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"/>
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Country
                    </th>
                    <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th scope="col" class="p-4">
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox"
                          class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"/>
                        <label for="checkbox-1" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td class="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                    <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>

                      <div class="text-sm font-normal text-gray-500">
                        <div class="text-base font-semibold text-gray-900">Neil Sims</div>
                        <div class="text-sm font-normal text-gray-500"><a
                            href="https://demo.themesberg.com/cdn-cgi/l/email-protection" class="__cf_email__"
                            data-cfemail="147a717d783a677d796754637d7a70676071663a777b79">[email&#160;protected]</a>
                        </div>
                      </div>
                    </td>
                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">Jan 4, 2022</td>
                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">United States</td>
                    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">
                      <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
                      </div>
                    </td>
                    <td class="p-4 whitespace-nowrap space-x-2">
                      <button type="button" data-modal-toggle="user-modal"
                        class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                        <svg class="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg>
                        Accept
                      </button>
                      <button type="button" data-modal-toggle="delete-user-modal"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                        <svg class="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"></path>
                        </svg>
                        Decline
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input id="checkbox-2" aria-describedby="checkbox-1" type="checkbox"
                          class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"/>
                        <label for="checkbox-2" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td class="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                    <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>

                      <div class="text-sm font-normal text-gray-500">
                        <div class="text-base font-semibold text-gray-900">Roberta Casas</div>
                        <div class="text-sm font-normal text-gray-500"><a
                            href="https://demo.themesberg.com/cdn-cgi/l/email-protection" class="__cf_email__"
                            data-cfemail="d7a5b8b5b2a5a3b6f9b4b6a4b6a497a0beb9b3a4a3b2a5f9b4b8ba">[email&#160;protected]</a>
                        </div>
                      </div>
                    </td>
                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">Jan 4, 2022</td>
                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">Spain</td>
                    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">
                    <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div> Offline
                        </div>
                    </td>
                    <td class="p-4 whitespace-nowrap space-x-2">
                      <button type="button" data-modal-toggle="user-modal"
                        class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                        <svg class="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg>
                        Accept
                      </button>
                      <button type="button" data-modal-toggle="delete-user-modal"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                        <svg class="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"></path>
                        </svg>
                        Decline
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input id="checkbox-3" aria-describedby="checkbox-1" type="checkbox"
                          class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"/>
                        <label for="checkbox-3" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td class="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                    <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>

                      <div class="text-sm font-normal text-gray-500">
                        <div class="text-base font-semibold text-gray-900">Michael Gough</div>
                        <div class="text-sm font-normal text-gray-500"><a
                            href="https://demo.themesberg.com/cdn-cgi/l/email-protection" class="__cf_email__"
                            data-cfemail="6d00040e050c0801430a02180a052d1a0403091e19081f430e0200">[email&#160;protected]</a>
                        </div>
                      </div>
                    </td>
                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">Jan 4, 2022</td>
                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">United Kingdom</td>
                    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">
                      <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
                      </div>
                    </td>
                    <td class="p-4 whitespace-nowrap space-x-2">
                      <button type="button" data-modal-toggle="user-modal"
                        class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                        <svg class="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg>
                        Accept
                      </button>
                      <button type="button" data-modal-toggle="delete-user-modal"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                        <svg class="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"></path>
                        </svg>
                        Decline
                      </button>
                    </td>
                  </tr>
                  <tr class="hover:bg-gray-100">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input id="checkbox-4" aria-describedby="checkbox-1" type="checkbox"
                          class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-cyan-200 h-4 w-4 rounded"/>
                        <label for="checkbox-4" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td class="p-4 flex items-center whitespace-nowrap space-x-6 mr-12 lg:mr-0">
                    <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80" alt=""/>

                      <div class="text-sm font-normal text-gray-500">
                        <div class="text-base font-semibold text-gray-900">Jese Leos</div>
                        <div class="text-sm font-normal text-gray-500"><a
                            href="https://demo.themesberg.com/cdn-cgi/l/email-protection" class="__cf_email__"
                            data-cfemail="4a202f392f64262f25390a3d23242e393e2f3864292527">[email&#160;protected]</a>
                        </div>
                      </div>
                    </td>
                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">Jan 4, 2022</td>
                    <td class="p-4 whitespace-nowrap text-base font-medium text-gray-900">United States</td>
                    <td class="p-4 whitespace-nowrap text-base font-normal text-gray-900">
                      <div class="flex items-center">
                        <div class="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div> Active
                      </div>
                    </td>
                    <td class="p-4 whitespace-nowrap space-x-2">
                      <button type="button" data-modal-toggle="user-modal"
                        class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                        <svg class="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                          </path>
                          <path fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"></path>
                        </svg>
                        Accept
                      </button>
                      <button type="button" data-modal-toggle="delete-user-modal"
                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-2 text-center">
                        <svg class="mr-2 h-5 w-5" fill="currentColor" viewbox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd"></path>
                        </svg>
                        Decline
                      </button>
                    </td>
                  </tr>
               
           
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


            </div>

            <>
            <div class="flex flex-col">
        <div class="overflow-x-auto">
        <h1 class="text-xl sm:text-2xl font-semibold text-gray-900"> Clients</h1>
    <div className="flex flex-col">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Date
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Status
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Customer
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    Contract
                                </th>

                                <th scope="col" className="relative py-3.5 px-4">
                                    <span className="sr-only">Actions</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                         
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 6, 2022</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <h2 className="text-sm font-normal">Paid</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                                        <div>
                                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Arthur Melo</h2>
                                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">authurmelo@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Monthly contract</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                  
                                </td>
                            </tr>

                            <tr>
                              
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 5, 2022</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 text-red-500 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <h2 className="text-sm font-normal">Cancelled</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt=""/>
                                        <div>
                                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Andi Lane</h2>
                                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">andi@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Monthly contract</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                   
                                </td>
                            </tr>

                            <tr>
                                
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 5, 2022</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <h2 className="text-sm font-normal">Paid</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80" alt=""/>
                                        <div>
                                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Kate Morrison</h2>
                                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">kate@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Monthly contract</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                   
                                </td>
                            </tr>

                            <tr>
                               
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <h2 className="text-sm font-normal">Paid</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1344&q=80" alt=""/>
                                        <div>
                                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Candice Wu</h2>
                                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">candice@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Monthly contract</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    
                                </td>
                            </tr>

                            <tr>
                              
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan 4, 2022</td>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center px-3 py-1 text-gray-500 rounded-full gap-x-2 bg-gray-100/60 dark:bg-gray-800">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.5 7L2 4.5M2 4.5L4.5 2M2 4.5H8C8.53043 4.5 9.03914 4.71071 9.41421 5.08579C9.78929 5.46086 10 5.96957 10 6.5V10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        <h2 className="text-sm font-normal">Refunded</h2>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <div className="flex items-center gap-x-2">
                                        <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80" alt=""/>
                                        <div>
                                            <h2 className="text-sm font-medium text-gray-800 dark:text-white ">Orlando Diggs</h2>
                                            <p className="text-xs font-normal text-gray-600 dark:text-gray-400">orlando@example.com</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Monthly contract</td>
                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                   
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

  </div>
</div>
            </>
        </div>
    </section>
    )}

export default Landing1;