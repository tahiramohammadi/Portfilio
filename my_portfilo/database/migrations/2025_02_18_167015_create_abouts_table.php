<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * 
     * 
     * @return void
     */
    public function up()
    {

    
        Schema::create('abouts', function (Blueprint $table) {
        
            $table->id();
            $table->text('bio');
            $table->string('profile_image')->nullable();
            $table->json('skills');
            $table->string('cv_file')->nullable();
            $table->json('level')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('abouts');

    }
};








    