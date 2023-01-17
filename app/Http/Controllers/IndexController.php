<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class IndexController extends Controller
{
    public function index()
    {
        return Inertia::render('Index', [
            'darkMode' => (bool)random_int(0, 1),
        ]);
    }
    public function demo()
    {
        return Inertia::render('Demo', [
            'darkMode' => (bool)random_int(0, 1),
        ]);
    }
}
