<template>
    <div class="md:navbar bg-base-100 shadow-sm md:absolute">
            <div class="navbar-start">
                <div class="dropdown">
                <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                    Menu
                </div>
                <ul
                    tabindex="0"
                    class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a>Home</a></li>
                    <li>
                    <a>About</a>
                    <ul class="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Support</a></li>
                </ul>
                </div>
                <a class="btn btn-ghost text-xl">TTL</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                    <li>
                    <a>About</a>
                    </li>
                    <li><a>Support</a></li>
                    </ul>
            </div>
            <div class="navbar-end">
                <a class="btn">Log In</a>
            </div>
        </div>
        
</template>