import Papa from 'papaparse';
import fs from 'fs';
import path from 'path';

// 定義數據介面 (告訴程式 CSV 裡有什麼欄位)
export interface Route {
  route_id: string;
  origin_zh: string;
  origin_en: string;
  destination_zh: string;
  destination_en: string;
  operator_zh: string;
  operator_en: string;
  fare_slow_weekday: number;
  fare_fast_weekday: number;
  fare_slow_holiday: number;
  fare_fast_holiday: number;
  seat_type_normal: string;
  seat_type_normal_en: string;
  seat_type_premium: string;
  seat_type_premium_en: string;
  holiday_pricing_mode: string;
  route_type_zh: string;
  route_type_en: string;
  duration_slow: number;
  duration_fast: number;
  origin_pier_zh: string;
  origin_pier_en: string;
  destination_pier_zh: string;
  destination_pier_en: string;
  origin_map_url: string;
  destination_map_url: string;
}

export interface Schedule {
  route_id: string;
  direction: 'outbound' | 'inbound';
  day_type: 'mon_sat' | 'sun_ph' | 'mon_fri' | 'sat' | 'sat_sun_ph';
  time: string;
  type: 'slow' | 'fast';
  remark_zh?: string;
  remark_en?: string;
}

// 讀取 CSV 檔案的函數
function readCsv<T>(fileName: string): T[] {
  const filePath = path.join(process.cwd(), 'src/data', fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  const { data } = Papa.parse(fileContent, {
    header: true,
    skipEmptyLines: true,
    dynamicTyping: true, // 自動把數字轉成數字 (例如 "10" 變成 10)
  });
  
  return data as T[];
}

// 匯出這兩個函數，讓頁面可以呼叫
export function getRoutes(): Route[] {
  return readCsv<Route>('routes.csv');
}

export function getSchedules(): Schedule[] {
  return readCsv<Schedule>('schedules.csv');
}

// 測試用：在終端機印出讀到了幾條線 (Debug)
console.log(`Loaded routes: ${getRoutes().length}`);
console.log(`Loaded schedules: ${getSchedules().length}`);