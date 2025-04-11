import { NextResponse } from "next/server";

export async function GET() {
  const result = [];
  for(let cont = 1; cont <= 10; cont++)
    result[cont-1] = cont * 5;
  return NextResponse.json(
    {
      "resultado": result
    }
  );
}
