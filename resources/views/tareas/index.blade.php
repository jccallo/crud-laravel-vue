@extends('layouts.app')

@section('content')

<!-- Links -->
<div class="container">
    <nav class="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">

            <!-- router-link -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">tareas index</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/form" class="nav-link">tareas index - form</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/list" class="nav-link">tareas index - form</router-link>
                </li>
            </ul>

        </div>
    </nav>
</div>

<div class="container">
    <router-view></router-view>
</div>

@endsection
