package Models;

/**
 * Created by Emmanuel Rose on 10/12/2017.
 */
public class Role {
    String Title;
    int Level;

    Role()
    {
        Title="";
        Level=0;
    }

    Role(String title,int level)
    {
        Title=title;
        Level=level;
    }
}
