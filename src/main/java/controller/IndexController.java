package controller;

import model.ResultObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

@RestController
public class IndexController {

    private static final Logger log = LoggerFactory.getLogger(IndexController.class);

    @PostMapping("/login")
    public ResultObject login(@RequestBody String data) throws IOException{
        ResultObject result = new ResultObject();
        OutputStreamWriter writer = null;
        BufferedReader reader = null;
        String res="";

        try{
            URL url = new URL("http://localhost:8081/auth/login");
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty( "Content-Type", "application/json");
            conn.setDoOutput(true);

            //envoi de la requête
            writer = new OutputStreamWriter(conn.getOutputStream());
            writer.write(data);
            writer.flush();

            //lecture de la réponse
            reader = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String ligne;
            while ((ligne = reader.readLine()) != null) {
                res += ligne;
            }
            log.info(result);
            result.

        }catch (Exception e){
            log.error("Login error : "+e);
        }finally {
            writer.close();
            reader.close();
        }
        return result;
    }

    @PostMapping("/login/*")
    public ModelAndView reload(){
        return new ModelAndView("index");
    }

}
