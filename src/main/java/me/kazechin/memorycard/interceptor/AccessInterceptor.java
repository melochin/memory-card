package me.kazechin.memorycard.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AccessInterceptor implements HandlerInterceptor {

    private final static String ALLOW_ORIGIN = "http://localhost:3000";


    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        // 存在Origin说明是跨域请求
        String origin = request.getHeader("Origin");
        if (origin == null) {
            return true;
        }

        if (!ALLOW_ORIGIN.equals(origin)) {
            response.setStatus(405);
            return false;
        }

        response.setHeader("Access-Control-Allow-Origin", ALLOW_ORIGIN);
        response.setHeader("Access-Control-Allow-Headers", "access-control-allow-headers," +
                "access-control-allow-methods,access-control-allow-origin," +
                "content-type");
        response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");

        if ("OPTIONS".equals(request.getMethod())) {
            response.setStatus(200);
            return false;
        }

        return true;
    }
}
