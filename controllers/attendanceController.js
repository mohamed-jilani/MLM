const { Attendance, Employee } = require('../models');

exports.getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.findAll({
      include: [
        {
          model: Employee,
          attributes: ['firstName', 'lastName', 'email'],
        },
      ],
    });
    res.status(200).json(attendances);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des pointages.' });
  }
};

exports.getAttendanceById = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id, {
      include: [
        {
          model: Employee,
          attributes: ['firstName', 'lastName', 'email'],
        },
      ],
    });

    if (!attendance) {
      return res.status(404).json({ error: 'Pointage non trouvé.' });
    }

    res.status(200).json(attendance);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du pointage.' });
  }
};

exports.createAttendance = async (req, res) => {
  try {
    const { EmployeeId, clockInTime, clockOutTime, latitude, longitude, status } = req.body;

    // Vérifie si l'employé existe
    const employee = await Employee.findByPk(EmployeeId);
    if (!employee) {
      return res.status(404).json({ error: 'Employé non trouvé.' });
    }

    // Création du pointage
    const newAttendance = await Attendance.create({
      EmployeeId,
      clockInTime,
      clockOutTime,
      latitude,
      longitude,
      status: status || 'Present', // Valeur par défaut
    });

    res.status(201).json(newAttendance);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création du pointage.' });
  }
};

exports.updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);

    if (!attendance) {
      return res.status(404).json({ error: 'Pointage non trouvé.' });
    }

    // Met à jour le pointage
    const updatedAttendance = await attendance.update(req.body);

    res.status(200).json(updatedAttendance);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du pointage.' });
  }
};

exports.deleteAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByPk(req.params.id);

    if (!attendance) {
      return res.status(404).json({ error: 'Pointage non trouvé.' });
    }

    // Supprime le pointage
    await attendance.destroy();

    res.status(200).json({ message: 'Pointage supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du pointage.' });
  }
};
