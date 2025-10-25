<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('experiences', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('about_id');
            $table->foreign('about_id')->references('id')->on('abouts')->onDelete('cascade');  // Foreign key to about table
            $table->string('title');
            $table->string('company');

            $table->string('insert_type')->nullable();

            $table->string('logo');
            $table->string('date');
            $table->text('description');
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
        Schema::dropIfExists('experiences');
    }
};

