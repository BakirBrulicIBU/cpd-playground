import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

export default function Page() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Async / Await
  const fetchUserData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      // 2. Array Methods (.filter & .map) + Destructuring
      const processedUsers = data
        .filter(({ id }: { id: number }) => id <= 3) // Filter first 3 users
        .map(({ name, email, company }: any) => ({
          name,
          email,
          companyName: company?.name ?? 'Unknown', // 3. Optional Chaining & Nullish Coalescing
        }));

      setUsers(processedUsers);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // 4. Arrow Function
  const renderUserCard = (user: any, index: number) => {
    // 5. Destructuring & Template Literals
    const { name, email, companyName } = user;
    const displayText = `#${index + 1}: ${name} (${email}) - ${companyName}`;

    // 6. Spread Operator
    const baseStyle = { fontSize: 14, marginVertical: 6 };
    const combinedStyle = { ...baseStyle, color: '#2c3e50' };

    return (
      <Text key={index} style={combinedStyle}>
        {displayText}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modern JS Concepts</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        users.map((user, index) => renderUserCard(user, index))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
