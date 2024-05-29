const dataStore = {
    items: [
        { id: 1, name: "Item 1", description: "Description for item 1" },
        { id: 2, name: "Item 2", description: "Description for item 2" },
        { id: 3, name: "Item 3", description: "Description for item 3" }
    ]
};

exports.getAllData = async (req, res) => {
    try {
        res.status(200).json(dataStore.items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getDataById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = dataStore.items.find((item) => item.id === parseInt(id));
        if (!data) {
            return res.status(404).json({ message: `Data with id ${id} not found` });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createData = async (req, res) => {
    const { name, description } = req.body;
    try {
        const data = { id: dataStore.items.length + 1, name, description };
        dataStore.items.push(data);
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};