<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {
    public function login(Request $request) { return response()->json(['message'=>'Login placeholder']); }
    public function me(Request $request) { return response()->json($request->user()); }
}
