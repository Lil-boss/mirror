import React from 'react';

const PricingCard = () => {
    return (
        <div>
            <div class="rounded-lg shadow-lg overflow-hidden max-w-sm mb-4">
                <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
                    <div class="flex justify-center">
                        <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                            Team Plan
                        </span>
                    </div>
                    <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
                        <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                            from
                        </span>
                        $10
                        <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                            /month
                        </span>
                    </div>
                </div>
                <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
                    <ul>
                        <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                                <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                $10/month per user
                            </p>
                        </li>
                        <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                                <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                Unlimited number of projects
                            </p>
                        </li>
                        <li class="mt-4 flex items-start">
                            <div class="flex-shrink-0">
                                <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                    </path>
                                </svg>
                            </div>
                            <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                                Cancel anytime
                            </p>
                        </li>
                    </ul>
                    <div class="mt-6 rounded-md shadow">
                        <a href="/" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-primary hover:bg-primary focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                            Start team plan
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingCard;