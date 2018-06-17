package tabian.com.actionbar;

import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.support.design.widget.BottomNavigationView;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

/**
 * Created by User on 4/15/2017.
 */

public class ActivityTwo extends AppCompatActivity {

    public Button btnFoto1;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_two);

        //TextView title = (TextView) findViewById(R.id.activityTitle2);
        //title.setText("This is ActivityTwo");

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);
        Menu menu = bottomNavigationView.getMenu();
        MenuItem menuItem = menu.getItem(1);
        menuItem.setChecked(true);

        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch (item.getItemId()){

                    case R.id.ic_maps:
                        Intent intent1 = new Intent(ActivityTwo.this, MainActivity.class);
                        startActivity(intent1);
                        break;

                    case R.id.ic_camera:

                        Intent intent2 = new Intent(ActivityTwo.this, ActivityOne.class);
                        startActivity(intent2);

                        break;

                    case R.id.ic_fire:



                        break;

                    case R.id.ic_search:

                        AlertDialog.Builder alert = new AlertDialog.Builder(ActivityTwo.this);

                        alert.setTitle("Pesquisar Construtoras");

                        LinearLayout layout = new LinearLayout(ActivityTwo.this);
                        layout.setOrientation(LinearLayout.VERTICAL);
                        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                                LinearLayout.LayoutParams.FILL_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
                        params.setMargins(20, 0, 30, 0);

                        EditText textBox = new EditText(ActivityTwo.this);
                        layout.addView(textBox, params);

                        alert.setView(layout);

                        alert.setPositiveButton("OK", new DialogInterface.OnClickListener() {
                            public void onClick(DialogInterface dialog, int whichButton) {



                            }
                        });

                        alert.show();

                        break;
                }


                return false;
            }
        });
    }

}
