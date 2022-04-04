<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class BookmarkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $bookmark = Bookmark::all(['id', 'title', 'url']);

        // return response()->json($bookmark);

        $bookmarks_result = DB::select('call show_bookmarks()');
        return response()->json($bookmarks_result);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $bookmark = Bookmark::create($request->post());
        // return response()->json([
        //     'bookmark' => $bookmark
        // ]);

        $bookmark = DB::insert('call insert_bookmark(?, ?, ?, ?)', [$request->title, $request->url, Date::now(), Date::now()]);
        return response()->json([
            'bookmark' => $bookmark
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Bookmark $bookmark)
    {
        // return response()->json($bookmark);

        $bookmark = DB::select('call show_bookmark(?)', [$bookmark->id]);
        return response()->json($bookmark[0]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Bookmark $bookmark)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Bookmark $bookmark)
    {
        $bookmark->fill($request->post())->save();
        return response()->json([
            'bookmark' => $bookmark
        ]);

        // $bookmark = DB::update('call update_bookmark(?, ?, ?, ?)', [$request->title, $request->url, Date::now(), $bookmark->id]);
        // return response()->json([
        //     'bookmark' => $bookmark
        // ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Bookmark $bookmark)
    {
        $bookmark->delete();
        return response()->json([
            'message'=>'¡Registro eliminado correctamente!'
        ]);

        // $deleted = DB::delete('call delete_bookmark(?)', [$bookmark->id]);
        // return response()->json([
        //     'message'=>'¡Registro eliminado correctamente!'
        // ]);
    }
}
