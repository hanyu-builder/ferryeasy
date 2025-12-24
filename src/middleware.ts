// src/middleware.ts
import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { url, request } = context;

  // 1. 只攔截根目錄 "/" (即 ferryeasy.app)，其他內頁不管
  if (url.pathname === "/") {
    
    // 2. 讀取瀏覽器的語言設定 header
    const acceptLanguage = request.headers.get("accept-language") || "";
    
    // 3. 判斷邏輯：只要包含 "zh" (zh-HK, zh-TW, zh-CN) 就去中文版
    // 其他所有情況 (en, ja, fr...) 都去英文版
    let targetLang = "en"; 
    if (acceptLanguage.toLowerCase().includes("zh")) {
      targetLang = "zh-hk";
    }

    // 4. 回傳轉址指令 (302 Found = 暫時轉址，方便偵測邏輯)
    // 這裡是在 Edge 執行的，速度極快
    return context.redirect(`/${targetLang}/`, 302);
  }

  // 如果不是根目錄，就繼續執行原本的頁面
  return next();
});