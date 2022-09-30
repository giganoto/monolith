### READ if You are a Giganoto Server Owner:

- Add a `config.json` file in this directory which also contains `app.py`.
- If You see the `.gitignore` file you will see `config.json` is mentioned in it.


#### Sample Config JSON file:

```json
  {
    "url": "https://some-url-using-localhost-run",
    "name": "Your Name",
    "email": "Your Gmail email id",
    "phone": "Your phone number",
    "twitter": "Your Twitter handle"
  }
```


#### Privacy concerns:

- Your email and phone number will not be displayed to public.
- We need phone and email only for use within Server owners.


### How to run:

- Part 1
  - Run any linux distribution on your EC2 or Raspberry PI.
  - Make sure you are able to login into it via SSH.
  - Start a screen session and run this command - `ssh -R 80:127.0.0.1:8090 localhost.run`.
  - Copy HTTPS URL given by localhost.run above and detach from the screen.
  - `localhost.run` might show some different page, go to bottom accept the cookie and click - `take me to my site`.

- Part 2
  - GIT Clone this repository.
  - Create your config file as explained above.
  - Don't foget to paste copied URL in "url" of config.json.
  - Run `python3.10 test.py` to confirm everything is fine.

- Part 3
  - Start another screen session.
  - Run - `python3.10 app.py` in that screen session.
  - Go to the copied localhost.run URL from a browser and confirm it shows your name.
  - Detach from this screen too, you are done!
