from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        day = request.form.get("day")
        month = request.form.get("month")
        year = request.form.get("year")
        time = request.form.get("time")
        subject = request.form.get("subject")
        return f"Scheduled: {subject} on {day}/{month}/{year} at {time}"

    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
