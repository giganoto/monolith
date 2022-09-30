import json
import signal
from socket import socket, AF_INET, SOCK_STREAM


sock = None


def run_server(host, port, listen_q_size, response):
    global sock

    sock = socket(AF_INET, SOCK_STREAM)
    sock.bind((host, port))
    sock.listen(listen_q_size)
    print("Server started")

    while True:
        try:
            conn, addr = sock.accept()
            req = conn.recv(1024).decode()
            print("Req RCVD")
            conn.sendall(response)
            conn.close()
            print("TCP connection ended")
        except Exception as e:
            print("Exception occured", e)


def create_response(name, twitter):
    response = f"""
    HTTP/1.1 200 OK
    content-type: text/html; charset=utf-8

    <h1>Hello from Giganoto | {name}'s server</h1><h2>Twitter-<a href="https://twitter.com/{twitter}">{twitter}</a>"""

    return response.strip().encode()


def signal_handler(signum, frame):
    "For a clean exit when you press CTRL+C"
    global sock

    if sock is not None:
        sock.close()

    print("Exiting ...")
    exit(0)


if __name__ == "__main__":
    signal.signal(signal.SIGINT, signal_handler)

    response = "Something went wrong!"
    with open("config.json") as fp:
        details = json.loads(fp.read())
        response = create_response(details["name"], details["twitter"])

    run_server("127.0.0.1", 8090, 10, response)
