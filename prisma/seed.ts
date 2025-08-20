import { PrismaClient, ServiceCategory } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.review.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.service.deleteMany();
  await prisma.vendor.deleteMany();
  await prisma.user.deleteMany();

  // Create sample users
  const user = await prisma.user.create({
    data: {
      name: 'Sample User',
      phone: '+966500000001',
      role: 'USER',
    },
  });

  // Create sample vendors
  for (let i = 1; i <= 20; i++) {
    const vendor = await prisma.vendor.create({
      data: {
        name: `Vendor ${i}`,
        category: ServiceCategory.VENUE,
        city: 'Riyadh',
        description: 'Sample vendor description',
        phone: `+966500000${String(i).padStart(3, '0')}`,
        email: `vendor${i}@example.com`,
      },
    });
    // Add one service per vendor
    await prisma.service.create({
      data: {
        vendorId: vendor.id,
        title: `Hall Rental ${i}`,
        description: 'Spacious hall with seating and sound system.',
        basePrice: 5000 + i * 100,
      },
    });
  }

  console.log('Seed data inserted.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
