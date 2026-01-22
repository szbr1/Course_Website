interface EnrollmentCheckParams {
  courseId: string;
  subscription: { isActive: boolean } | null | undefined;
  purchasedCourses: string[] | null | undefined;
}

export const isEnrolled = ({
  courseId,
  subscription,
  purchasedCourses,
}: EnrollmentCheckParams): boolean => {
  // Has active subscription = enrolled in all courses
  if (subscription?.isActive) return true;

  // Check individual purchase
  return purchasedCourses?.includes(courseId) ?? false;
};