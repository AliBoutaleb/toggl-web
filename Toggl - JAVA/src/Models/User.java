package Models;

import java.util.ArrayList;
import java.util.Date;

/**
 * Created by Emmanuel Rose on 10/12/2017.
 */
public class User {
    public String first_name;
    public String last_name;
    public String email;
    public String password;
    public Date birthDate;
    public ArrayList<Task> Tasks;
    public Role Role;

    public User()
    {
        first_name="";
        last_name="";
        email="";
        password="";
        birthDate=null;
        Tasks=new ArrayList<Task>();
        Role=null;
    }

    public User(String fname,String lname,String mail,String pwd, Date birth,Role role)
    {
        first_name=fname;
        last_name=lname;
        email=mail;
        password=pwd;
        birthDate=birth;
        Tasks=new ArrayList<Task>();
        Role=role;
    }

    public void addTask(Task t)
    {
        Tasks.add(t);
    }

    @Override
    public String toString() {
        return first_name +" "+ last_name +" "+ email;
    }
}



