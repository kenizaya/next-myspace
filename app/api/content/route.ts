const posts = [
  {
    title: 'The Art of Painting',
    slug: 'the-art-of-painting',
    content:
      'In this post, we explore the techniques and history of painting, from classical to contemporary styles.',
  },
  {
    title: 'Exploring the World of Photography',
    slug: 'exploring-the-world-of-photography',
    content:
      'Join us on a visual journey as we delve into the captivating world of photography and its various genres.',
  },
  {
    title: 'Delicious Recipes for Food Lovers',
    slug: 'delicious-recipes-for-food-lovers',
    content:
      'Get ready to tantalize your taste buds with these mouthwatering recipes that are sure to delight any food lover.',
  },
  {
    title: 'The Benefits of Yoga and Meditation',
    slug: 'the-benefits-of-yoga-and-meditation',
    content:
      'Discover the numerous physical and mental benefits of incorporating yoga and meditation into your daily routine.',
  },
  {
    title: 'The Rise of Artificial Intelligence',
    slug: 'the-rise-of-artificial-intelligence',
    content:
      'Learn about the advancements and applications of artificial intelligence and its impact on various industries.',
  },
  {
    title: 'Exploring the Wonders of the Universe',
    slug: 'exploring-the-wonders-of-the-universe',
    content:
      'Embark on a cosmic journey as we uncover the mysteries of the universe, from black holes to distant galaxies.',
  },
  {
    title: 'Tips for a Productive Workday',
    slug: 'tips-for-a-productive-workday',
    content:
      'Boost your productivity with these practical tips and strategies to make the most of your workday.',
  },
  {
    title: 'The World of Fashion and Style',
    slug: 'the-world-of-fashion-and-style',
    content:
      'Dive into the glamorous world of fashion and style, from runway trends to personal styling tips.',
  },
  {
    title: 'The Power of Positive Thinking',
    slug: 'the-power-of-positive-thinking',
    content:
      'Explore the transformative effects of positive thinking and how it can improve your overall well-being.',
  },
  {
    title: 'Exploring the Marvels of Nature',
    slug: 'exploring-the-marvels-of-nature',
    content:
      'Witness the awe-inspiring beauty of nature and learn about the diverse ecosystems that inhabit our planet.',
  },
  {
    title: 'The Evolution of Technology',
    slug: 'the-evolution-of-technology',
    content:
      'Trace the evolution of technology throughout history and discover how it has revolutionized the way we live.',
  },
  {
    title: 'Mastering the Art of Public Speaking',
    slug: 'mastering-the-art-of-public-speaking',
    content:
      'Gain valuable insights and techniques to become a confident and effective public speaker.',
  },
  {
    title: 'Unlocking the Secrets of Success',
    slug: 'unlocking-the-secrets-of-success',
    content:
      'Learn the key principles and habits that can help you unlock your full potential and achieve success in life.',
  },
  {
    title: 'The World of Fantasy Literature',
    slug: 'the-world-of-fantasy-literature',
    content:
      'Immerse yourself in the enchanting realm of fantasy literature, filled with magic, mythical creatures, and epic adventures.',
  },
  {
    title: 'Exploring Ancient Civilizations',
    slug: 'exploring-ancient-civilizations',
    content:
      'Unearth the mysteries of ancient civilizations and delve into their fascinating cultures, architecture, and achievements.',
  },
  {
    title: 'The Importance of Environmental Conservation',
    slug: 'the-importance-of-environmental-conservation',
    content:
      'Discover the urgent need for environmental conservation and how each of us can contribute to a sustainable future.',
  },
  {
    title: 'The World of Modern Architecture',
    slug: 'the-world-of-modern-architecture',
    content:
      'Marvel at the innovative designs and groundbreaking structures that define the world of modern architecture.',
  },
  {
    title: 'Exploring the Fascinating World of Robotics',
    slug: 'exploring-the-fascinating-world-of-robotics',
    content:
      'Enter the realm of robotics and automation as we explore the cutting-edge technologies and applications shaping our future.',
  },
  {
    title: 'Discovering the Art of Filmmaking',
    slug: 'discovering-the-art-of-filmmaking',
    content:
      'Delve into the art and craft of filmmaking, from scriptwriting and cinematography to editing and post-production.',
  },
  {
    title: 'The Joy of Travel and Adventure',
    slug: 'the-joy-of-travel-and-adventure',
    content:
      'Embark on thrilling adventures and discover the joy of traveling to new destinations, immersing yourself in different cultures.',
  },
]

import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json(posts)
}
