<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::inertia('/', 'welcome')->name('home');

Route::get('/users', [UserController::class, 'index'])->name('users.index');
