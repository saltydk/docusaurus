
---
IT IS QUITE PROBABLE THAT SOME INFORMATION HERE IS OUTDATED

[PLEASE OPEN ISSUES](https://github.com/saltyorg/docs/issues)

## If you are unable to find your Plex server

You may resolve this by either

 - Installing Saltbox again (do this for new Plex DBs/installs):

   - **THIS WILL DELETE ANY EXISTING PLEX CONFIGURATION SUCH AS LIBRARIES**

   - Remove Plex Container (it may show "Error response from daemon: No such container" if not created yet):

     ```
     sudo docker rm -f plex
     ```

   - Remove the Plex folder:

     ```
     sudo rm -rf /opt/plex
     ```

   - Reinstall the Plex container:

     ```
     sb install plex
     ```

 - Installing Saltbox again (do this for existing Plex DBs/installs):

   - **THIS WILL LEAVE ANY EXISTING PLEX LIBRARIES AND METADATA INTACT**

   - Remove Plex Preferences file. 

     ```
     sudo rm "/opt/plex/Library/Application Support/Plex Media Server/Preferences.xml"
     ```

   - Reinstall the Plex container by running the following command:

     ```
     sb install plex
     ```


 - Using SSH Tunneling to log into Plex and set your credentials:

   - On your host PC (replace `<user>` with your user name and `<yourserveripaddress>` with your serveripaddress - no arrows):

     ```
     ssh <user>@<yourserveripaddress> -L 32400:0.0.0.0:32400 -N
     ```

     This will just hang there without any message. That is normal.

   - In a browser, go to http://localhost:32400/web.

   - Log in with your Plex account.

   - On the "How Plex Works" page, click “GOT IT!”.

   - Close the "Plex Pass" pop-up if you see it.

   - Under "Server Setup", you will see "Great, we found a server!". Give your server a name and tick “Allow me to access my media outside my home”. Click "NEXT".

   - On "Organize Your Media", hit "NEXT" (you will do this later). Then hit "DONE".

   - At this point, you may `Ctrl + c` on the SSH Tunnel to close it.



 If Plex shows you an incorrect title with the filename (eg RARBG releases)

Reorder the Plex agents for TV/Movies so that local assets are at the bottom.


## Fix permission issues with Plex logs


Replace `user` and `group` to match yours' (see [here](/System#find-your-user-id-uid-and-group-id-gid)).

```
sudo chown -R user:group /opt/plex/Library/Logs
sudo chmod -R g+s /opt/plex/Library/Logs
```

_Note: If you have a separate Plex and Feeder setup, this will be done on the server where Plex is installed._
