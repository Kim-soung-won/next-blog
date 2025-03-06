import { NextResponse } from "next/server";

/**
 * 접근이 이뤄지고 실행될 middleware 함수
 * 모든 요청에 대해 해당 함수가 실행된다.
 * @param {Request} request
 */
export function middleware(request) {
  console.log("======================================");
  console.log(request);
  console.log("======================================");
  return NextResponse.next();
}

/**
 * middleware 함수가 실행될 path를 지정한다.
 */
export const conifg = {
  matcher: ['/news', '/news/*', '/food', '/news/archive'],
};