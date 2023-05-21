FROM python:3
WORKDIR /backend-app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python3", "-u", "run.py"]