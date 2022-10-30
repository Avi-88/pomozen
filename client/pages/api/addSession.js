import { doc, setDoc } from "firebase/firestore";
import { db } from "../../config/FirebaseConfig";

export default async function sessionHandler(req, res) {
  if (req.method === "POST") {
    try {
      const sessionRef = doc(db, "userData", req.body.userId , "sessions", 1);
      const data = await setDoc(sessionRef, {
        sessionLength: req.body.sessionLength,
        focusTime: req.body.focusTime,
        addedTasks: req.body.addedTasks,
        completedTasks: req.body.completedTasks,
      });
      console.log('firebase resp:', data);
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(404).json("No such route found");
  }
}
