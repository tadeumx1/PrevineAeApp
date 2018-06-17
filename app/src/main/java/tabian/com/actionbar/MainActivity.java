package tabian.com.actionbar;

import android.content.DialogInterface;
import android.content.Intent;
import android.support.annotation.NonNull;
import android.support.design.widget.BottomNavigationView;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.Window;
import android.view.WindowManager;
import android.widget.EditText;
import android.widget.LinearLayout;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.MapFragment;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.BitmapDescriptorFactory;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class MainActivity extends AppCompatActivity implements OnMapReadyCallback  {

    private static final String TAG = "MainActivity";

    private com.google.android.gms.maps.SupportMapFragment map;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        BottomNavigationView bottomNavigationView = (BottomNavigationView) findViewById(R.id.bottomNavView_Bar);
        BottomNavigationViewHelper.disableShiftMode(bottomNavigationView);
        Menu menu = bottomNavigationView.getMenu();
        MenuItem menuItem = menu.getItem(2);
        menuItem.setChecked(true);

        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);

        mapFragment.getMapAsync(MainActivity.this);

        bottomNavigationView.setOnNavigationItemSelectedListener(new BottomNavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                switch (item.getItemId()){

                    case R.id.ic_maps:



                    case R.id.ic_camera:
                        Intent intent2 = new Intent(MainActivity.this, ActivityOne.class);
                        startActivity(intent2);
                        break;

                    case R.id.ic_fire:
                        Intent intent3 = new Intent(MainActivity.this, ActivityTwo.class);
                        startActivity(intent3);
                        break;

                    case R.id.ic_search:

                        AlertDialog.Builder alert = new AlertDialog.Builder(MainActivity.this);

                        alert.setTitle("Pesquisar Obras");

                        LinearLayout layout = new LinearLayout(MainActivity.this);
                        layout.setOrientation(LinearLayout.VERTICAL);
                        LinearLayout.LayoutParams params = new LinearLayout.LayoutParams(
                                LinearLayout.LayoutParams.FILL_PARENT, LinearLayout.LayoutParams.WRAP_CONTENT);
                        params.setMargins(20, 0, 30, 0);

                        EditText textBox = new EditText(MainActivity.this);
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

    @Override
    public void onMapReady(GoogleMap googleMap) {

        // Add a marker in Sydney, Australia,
        // and move the map's camera to the same location.
        LatLng obra1 = new LatLng(-23.558902, -46.649149);
        googleMap.addMarker(new MarkerOptions().position(obra1)
                .title("Aréa da Sáude - Hospital Santos, Reis and Martins"));
        googleMap.moveCamera(CameraUpdateFactory.newLatLngZoom(obra1, 12));

        LatLng obra2 = new LatLng(-23.563859, -46.633892);
        googleMap.addMarker(new MarkerOptions().position(obra2)
                .title("Aréa da Sáude - Hospital Santos, Reis and Martins"));

        LatLng obra3 = new LatLng(-23.527988, -46.663922);
        googleMap.addMarker(new MarkerOptions().position(obra3)
                .title("Área Escolar - Escola Jorge Amado "));

        LatLng obra4 = new LatLng(-23.541546, -46.609588);
        googleMap.addMarker(new MarkerOptions().position(obra4)
                .title("Aréa da Sáude - Hospital Santos, Reis and Martins"));

        LatLng obra5 = new LatLng(-23.566244, -46.621220);
        googleMap.addMarker(new MarkerOptions().position(obra5)
                .title("Área Escolar - Escola Vinicíus Martins"));

        LatLng obra6 = new LatLng(-23.545405, -46.620990);
        googleMap.addMarker(new MarkerOptions().position(obra6)
                .title("Área Escolar - Escola Carlos Gomes")
                .icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_GREEN)));

        LatLng obra7 = new LatLng(-23.549916, -46.620056);
        googleMap.addMarker(new MarkerOptions().position(obra7)
                .title("Aréa da Sáude - Hospital Santos, Reis and Martins")
                .icon(BitmapDescriptorFactory.defaultMarker(BitmapDescriptorFactory.HUE_GREEN)));

    }
}
