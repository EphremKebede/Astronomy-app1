package com.example.myapplicationoroastronomy;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.Window;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.myWebView);
        WebSettings webSettings = webView.getSettings();
        webSettings.setBuiltInZoomControls(false);
        webSettings.setJavaScriptEnabled(true);
        webView.setWebViewClient(new Callback());
        webView.loadUrl("file:///android_asset/home.html");
    }
    private class Callback extends WebViewClient {
        @Override
        public boolean shouldOverrideUrlLoading(WebView view, String url){
            return false;
        }
    }
    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()){
            webView.goBack();
        }else {
            super.onBackPressed();
        }
    }
}