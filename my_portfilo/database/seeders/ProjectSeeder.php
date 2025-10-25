<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     * 
     */
    public function run()
    {
        DB::table('projects')->insert([
            [
                'title'   => 'Kankor Examination System',
                'description'     => 'Developed Kankor Examination and learning System using laravel and bootstrap',
                'image'  => 'kankor.png',
                'github_link' => 'https://github.com/tahiramohammadi/blog.git',
            ],
            [
                'title'   => 'Search Meal',
                'description'     => 'Searching food system using react based on their type and name, and displaying  the recipes ',
                'image'  => 'meal.png',
                'github_link' => 'https://github.com/tahiramohammadi/searchFood.git',
            ],
            [
                'title'   => 'Rapid Iteration',
                'description'     => 'Rapid Iteration using html and css',
                'image'  => 'rapid.png',
                'github_link' => 'https://github.com/tahiramohammadi/secondChallenges.git',
            ],
            [
                'title'   => 'Watchlist Movies',
                'description'     => 'Show the Movies on your Watchlist using react',
                'image'  => 'watchlist.png',
                'github_link' => 'https://github.com/tahiramohammadi/watchlistMovies.git',
            ],
            [
                'title'   => 'Quizzical App',
                'description'     => 'Test your General Information and made using react',
                'image'  => 'quiz.png',
                'github_link' => 'https://github.com/tahiramohammadi/quizzicalApp.git',
            ],
       
        ]);
    }
}
