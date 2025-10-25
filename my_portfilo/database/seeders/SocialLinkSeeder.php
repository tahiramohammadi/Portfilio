<?php

namespace Database\Seeders;



use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SocialLinkSeeder extends Seeder
{
    public function run()
    {
        DB::table('social_links')->insert([
            [
                'icon' => 'FaFacebook',
                'url' => 'https://facebook.com/yourprofile',
            ],
            [
                'icon' => 'FaTwitter',
                'url' => 'https://twitter.com/yourprofile',
            ],
            [
                'icon' => 'FaLinkdin',
                'url' => 'https://linkedin.com/in/yourprofile',
            ],
            [
                'icon' => 'FaGitHub',
                'url' => 'https://github.com/yourprofile',
            ],
            // Add more platforms as needed
        ]);
    }
}