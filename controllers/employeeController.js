const { Employee } = require('../models');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.findAll();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des employés.' });
  }
};

exports.getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employé non trouvé.' });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de l’employé.' });
  }
};

exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la création de l’employé.' });
  }
};

exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employé non trouvé.' });
    }
    await employee.update(req.body);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour de l’employé.' });
  }
};

exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employé non trouvé.' });
    }
    await employee.destroy();
    res.status(200).json({ message: 'Employé supprimé avec succès.' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l’employé.' });
  }
};
