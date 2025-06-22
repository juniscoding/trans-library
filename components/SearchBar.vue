<template>
    <div>
        <div class="join">
            <select class="select join-item w-24" id="selectSearch">
            <option selected value="books">Books</option>
            <option value="tropes">Tropes</option>
            <option value="tags">Tags</option>
            <option value="author">Author</option>
            </select>
            <div>
            <label class="input join-item">
                <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" required placeholder="Search" />
                </label>
            </div>
        </div>
        <button class="btn btn-ghost mt-6">Advanced Search</button>
    </div>
</template>

