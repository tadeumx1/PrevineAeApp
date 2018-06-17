package tabian.com.actionbar;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;

public class DetalheActivity extends AppCompatActivity {

     private WebView webViewhtmlCSS;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detalhe);

        webViewhtmlCSS = (WebView) findViewById(R.id.webView);

        webViewhtmlCSS.getSettings().setJavaScriptEnabled(true);

        webViewhtmlCSS.loadUrl("file:///android_asset/examples/user2.html");


    }
}
