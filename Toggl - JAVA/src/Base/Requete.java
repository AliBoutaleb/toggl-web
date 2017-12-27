package Base;

import Models.User;
import org.json.JSONObject;
import org.json.JSONArray;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;


/**
 * Created by Emmanuel Rose on 11/12/2017.
 */
public class Requete {
    public static final String token="";

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        token = token;
    }

    public static void main(String[] args) throws Exception {
        toListUser(sendGetUsers());
    }

    public static String sendGetUsers() throws Exception
    {
        HttpURLConnection co = ConfigRequete("GET");
        //Get Response
        return getReponse(co);
    }

    public static void toListUser(String s)
    {
        ArrayList<User> listuser = new ArrayList<User>();
        User user = new User();
        JSONArray jsonArray = new JSONArray(s);
        for (int i = 0; i < jsonArray.length(); i++) {
            JSONObject explrObject = jsonArray.getJSONObject(i);
            user.first_name=explrObject.getString("first_name");
            user.last_name=explrObject.getString("last_name");
            user.email=explrObject.getString("email");
            System.out.println(user.toString());
            listuser.add(user);
        }
    }

    public void sendPost() throws Exception
    {

        URL url=new URL("http://localhost:8080/auth/login");
        HttpURLConnection co =(HttpURLConnection) url.openConnection();
        co.setRequestMethod("POST");
        co.setRequestProperty("Content-Type","application/json");
        co.setRequestProperty("Accept", "application/json");
//        co.setRequestProperty("Authorization", Token); //pour passer le token en param

        // Send post request
        co.setDoOutput(true);
        JSONObject cred   = new JSONObject();
        cred.put("email","yyy@ferv.mars");
        cred.put("password", "azerty");
        OutputStreamWriter wr = new OutputStreamWriter(co.getOutputStream());
        wr.write(cred.toString());
        wr.flush();

        //Get Response
        System.out.println(getReponse(co));
        getReponse(co);
        setToken(getReponse(co));
    }

    public static HttpURLConnection ConfigRequete(String method) throws Exception
    {
        URL url=new URL("http://localhost:8080/users");
        HttpURLConnection co =(HttpURLConnection) url.openConnection();
        co.setRequestMethod(method);
        return co;
    }

    public static String getReponse(HttpURLConnection co) throws Exception
    {
        BufferedReader in = new BufferedReader(
                new InputStreamReader(co.getInputStream()));
        String inputLine;
        StringBuilder response = new StringBuilder();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        return response.toString();
    }
}

